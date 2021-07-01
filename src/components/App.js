import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { ToolHeader } from "./ToolHeader";
import { ToolFooter } from "./ToolFooter";
import { ElectionList } from "./ElectionList";
import { ElectionForm } from "./ElectionForm";
import { Menu } from "./Menu";
import { RegisterVoterForm } from "./RegisterVoterForm";
import { electionStore } from "../stores/election";
import { Provider } from 'react-redux';
import { ElectionListContainer } from "../containers/ElectionListContainer";
export const App = () => {
  return (
    <Router>
      <Layout>
        <ToolHeader title="Ballot Badgers Online Voting" slogan="Be Aware, Do your Share!" />
        <Menu />
        <main>
          <Route path="/register-voter">
            <RegisterVoterForm />
          </Route>
          <Route path="/voters">
            <div>List voters</div>
          </Route>
          <Route path="/add-election">
            <ElectionForm />
          </Route>
          <Route path="/elections">
            <Provider store={electionStore}>
              <ElectionListContainer />
            </Provider>
          </Route>
          <Route path="/election/:id/vote">
            <div>To register a vote for the selected election</div>
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
