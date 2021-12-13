import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import { checkPropTypes } from "prop-types";
import React, { useRef, useState } from "react";
import AceEditor from "react-ace";
import { useHistory } from "react-router";
import Select from "react-select";
import {
  Button,
  CustomizedTable,
  EditorContainer,
  HeroLeft,
  HeroRight,
  InNavbar,
  LinearIndeterminate,
  PlaygroundContainer,
  PlaygroundHeader,
  PlaygroundOptions,
  PlaygroundTitle,
  ResultsContainer,
  ResultsHeader,
} from "../components";
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const options = [
  { value: "msft", label: "Microsoft" },
  { value: "googl", label: "Google" },
  { value: "fb", label: "Facebook" },
];

const endPoint = "/backtest";

const Backtest = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const editorRef = useRef();
  const [stockName, setStockName] = useState("msft");
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    const request = {
      method: "post",
      url: endPoint,
      headers: { "Content-Type": "application/json" },
      data: {
        strategy_code: editorRef.value,
        stock_name: stockName,
      },
    };
    try {
      setError(false);
      setResults({});
      const response = await axios(request);
      setResults(response["data"]);
    } catch (err) {
      setError(true);
    }
    setLoading(false);
    console.log(results);
  };

  return (
    <>
      <InNavbar />
      <PlaygroundHeader>
        <PlaygroundTitle>Playground</PlaygroundTitle>
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
              fontSize={11}
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
              ref={editorRef}
            />
          </EditorContainer>
          <Button onClick={handleClick} primary special>
            Backtest
          </Button>
        </HeroLeft>

        <HeroRight>
          <PlaygroundOptions>
            <Select
              options={options}
              onChange={(e) => setStockName(e.value)}
              placeholder="Choose a stock"
            />
          </PlaygroundOptions>
          {loading ? <LinearIndeterminate /> : <></>}
          {error ? <div> someting went wrong... :(</div> : <></>}
          {Object.keys(results).length > 0 && !error && !loading ? (
            <ResultsContainer>
              <ResultsHeader>Results</ResultsHeader>
              <CustomizedTable rows={results} />
            </ResultsContainer>
          ) : (
            <></>
          )}
        </HeroRight>
      </PlaygroundContainer>
    </>
  );
};

export default Backtest;
