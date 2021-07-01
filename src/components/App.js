import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { ToolHeader } from "./ToolHeader";
import { ToolFooter } from "./ToolFooter";
import { ElectionList } from "./ElectionList";
import { ElectionForm } from "./ElectionForm";
import { Menu } from "./Menu";

export const App = () => {
  return (
    <Router>
      <Layout>
        <ToolHeader toolHeader="Online Voting" />
        <Menu />
        <main>
          <Route path="/register-voter">
            <div>Page to register voter</div>
          </Route>
          <Route path="/voters">
            <div>List voters</div>
          </Route>
          <Route path="/add-election">
            <ElectionForm />
          </Route>
          <Route path="/elections">
            <ElectionList />
          </Route>
          <Route path="/vote">
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
