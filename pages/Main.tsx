import React from 'react';
import {setupStore} from './store/Store';
import { Provider } from 'react-redux';
import styles from "../styles/Home.module.css";
import UserListView from "./components/UserListView";

const store = setupStore();

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <React.StrictMode>
          <Provider store={store}>

            <UserListView />

          </Provider>
        </React.StrictMode>,

      </main>
    </>
  )
}
