import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { electionStore } from "../stores/election";

import { Layout } from "./Layout";
import { PageHeader } from "./PageHeader";
import { ToolFooter } from "./ToolFooter";
import { Menu } from "./Menu";

import { ElectionListContainer } from "../containers/ElectionListContainer";
import { ElectionFormContainer } from "../containers/ElectionFormContainer";
import { VotersListContainer } from "../containers/VotersListContainer";
import { VoterFormContainer } from "../containers/VoterFormContainer";
import { VoterVerificationContainer } from "../containers/VoterVerificationContainer";

export const App = () => {
  return (
    <Router>
      <Layout>
        <PageHeader
          title="Ballot Badgers Online Voting"
          slogan="Be Aware, Do your Share!"
        />
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
            <Provider store={electionStore}>
              <ElectionFormContainer />
            </Provider>
          </Route>
          <Route path="/elections" exact>
            <Provider store={electionStore}>
              <ElectionListContainer />
            </Provider>
          </Route>
          <Route path="/elections/:electionId/verifyVoter">
            <Provider store={electionStore}>
              <VoterVerificationContainer />
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
