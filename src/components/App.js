import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { ToolHeader } from "./ToolHeader";
import { ToolFooter } from "./ToolFooter";
import { Menu } from "./Menu";
import { RegisterVoterForm } from "./RegisterVoterForm";

export const App = () => {
  return (
    <Router>
      <Layout>
        <ToolHeader title="Ballot Badgers Online Voting" slogan="Be Aware, Do your Share!"/>
        <Menu />
        <main>
          <Route path="/register-voter">
            <RegisterVoterForm />
          </Route>
          <Route path="/voters">
            <div>List voters</div>
          </Route>
          <Route path="/add-election">
            <div>Page to create new election with questions</div>
          </Route>
          <Route path="/elections">
            <div>List elections with results</div>
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
