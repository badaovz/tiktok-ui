import { Fragment } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { DefaultLayout } from '~/layouts';
import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((item, index) => {
                    const Page = item.component;
                    let Layout = DefaultLayout;
                    if (item.layout) {
                        Layout = item.layout;
                    } else if (item.layout === null) {
                        Layout = Fragment;
                    }
                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
