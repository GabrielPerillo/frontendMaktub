import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Details from './pages/Details';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
                <Route path="/details" component={Details} />
            </Switch>
        </BrowserRouter>
    );
}

// Já que o router-dom só verá se há a propriedade '/' no caminho, a rota inicial será sempre exibida no lugar das outras
// Então utilizamos o 'exact' que serve para indicar que o caminho precisa ser exatamente o mesmo