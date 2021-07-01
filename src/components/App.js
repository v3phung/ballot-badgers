import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { electionStore } from "../stores/election";

import { Layout } from "./Layout";
import { ToolHeader } from "./ToolHeader";
import { ToolFooter } from "./ToolFooter";
import { ElectionForm } from "./ElectionForm";
import { Menu } from "./Menu";
import { Ballot } from "./Ballot";

import { ElectionListContainer } from "../containers/ElectionListContainer";
import { VotersListContainer } from "../containers/VotersListContainer";
import { VoterFormContainer } from "../containers/VoterFormContainer";

export const App = () => {
  return (
    <Router>
      <Layout>
        <ToolHeader title="Ballot Badgers Online Voting" slogan="Be Aware, Do your Share!" />
        <Menu />
        <main>
          <Route path="/register-voter">
            <Provider store={electionStore}>
              <VoterFormContainer />
            </Provider>
          </Route>
          <Route path="/voters">
            <Provider store={electionStore}>
              <VotersListContainer />
            </Provider>
          </Route>
          <Route path="/add-election">
            <ElectionForm />
          </Route>
          <Route path="/elections" exact>
            <Provider store={electionStore}>
              <ElectionListContainer />
            </Provider>
          </Route>
          <Route path="/elections/:electionId/voters/:voterId">
            <Provider store={electionStore}>
              <Ballot/>
            </Provider>
          </Route>
          <Route path="/" exact>
            <div>Welcome to Online Voting</div>
          </Route>
        </main>

        <ToolFooter companyName="Ballot Badgers Company, Inc." year="2021" />
      </Layout>
    </Router>
  );
};
