import styles from "./App.module.css";

function App() {
  return (
    <div class={styles.App}>
      <button
        onClick={() => {
          console.log("template");
        }}
      >
        template
      </button>
    </div>
  );
}

export default App;
