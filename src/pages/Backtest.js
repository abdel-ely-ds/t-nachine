import Switch from "@material-ui/core/Switch";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import AceEditor from "react-ace";
import { useHistory } from "react-router";
import Select from "react-select";
import styled from "styled-components";
import { Button, CustomizedTable, InNavbar } from "../components";
import { useAuth } from "../contexts/AuthContext";

const options = [
  { value: "MSFT", label: "Microsoft" },
  { value: "GOOGL", label: "Google" },
  { value: "FB", label: "Facebook" },
];

export function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const PlaygroundContainer = styled.div`
  margin: 0px;
  display: flex;
`;

export const HeroLeft = styled.div`
  float: left;
  display: block;
  width: 80%;
  height: 50%;
  padding-left: 50px;
`;

export const HeroRight = styled.div`
  float: right;
  display: block;
  width: 20%;
  padding-left: 10px;
  padding-right: 60px;
`;

export const EditorContainer = styled.div`
  margin-bottom: 10px;
  border: solid;
  border-color: rgb(48, 13, 79);
  border-width: 1px;
  border-radius: 3px;
  width: 100%;
`;

export const PlaygroundHeader = styled.div`
  padding-left: 50px;

  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PlaygroundTitle = styled.h1`
  font-size: 20px;
  font-weight: 600px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ResultsContainer = styled.div`
  margin-top: 10px;
`;

const Backtest = () => {
  const { logout } = useAuth();
  const history = useHistory();

  function handleClick() {}
  return (
    <>
      <InNavbar />
      <PlaygroundHeader>
        <PlaygroundTitle>Playground</PlaygroundTitle>
        <Switch color="primary" />
      </PlaygroundHeader>

      <PlaygroundContainer>
        <HeroLeft>
          <EditorContainer>
            <AceEditor
              mode="python"
              theme="github"
              placeholder="Start Writting your strategy"
              height="70vh"
              width="100%"
              fontSize={20}
              showPrintMargin={false}
              showGutter={true}
              highlightActiveLine={false}
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
              }}
            />
          </EditorContainer>
          <Button onClick={handleClick} primary special>
            Backtest
          </Button>
        </HeroLeft>

        <HeroRight>
          <Select options={options} />
          <ResultsContainer>
            <CustomizedTable rows={rows} />
          </ResultsContainer>
        </HeroRight>
      </PlaygroundContainer>
    </>
  );
};

export default Backtest;
