import Switch from "@material-ui/core/Switch";
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import AceEditor from "react-ace";
import { useHistory } from "react-router";
import Select from "react-select";
import {
  Button,
  LinearIndeterminate,
  CustomizedTable,
  InNavbar,
  PlaygroundContainer,
  PlaygroundHeader,
  PlaygroundTitle,
  EditorContainer,
  HeroRight,
  HeroLeft,
  ResultsContainer,
} from "../components";
import { InputLabel, OutlinedInput, InputAdornment } from "@material-ui/core";
import { useAuth } from "../contexts/AuthContext";
import React, { useState, useRef } from "react";

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
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(editorRef.current.value);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        strategy_code: editorRef.current.value,
        stock_name: stockName,
      }),
    };
    try {
      setError(false);
      setResults({});
      const response = await (await fetch(endPoint, requestOptions)).json();
      setResults(JSON.parse(response["backtest_results"]));
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <InNavbar />
      <PlaygroundHeader>
        <PlaygroundTitle>Playground</PlaygroundTitle>
        <Select
          options={options}
          value={options.find((obj) => obj.value === stockName)}
          onChange={(e) => setStockName(e.value)}
        />
        <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
        <OutlinedInput
          id="outlined-adornment-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          label="Amount"
        />
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
          <ResultsContainer>
            {loading ? <LinearIndeterminate /> : <></>}
            {error ? <div> someting went wrong... :(</div> : <></>}
            {results !== undefined && !loading ? (
              <CustomizedTable rows={results} />
            ) : (
              <></>
            )}
          </ResultsContainer>
        </HeroRight>
      </PlaygroundContainer>
    </>
  );
};

export default Backtest;
