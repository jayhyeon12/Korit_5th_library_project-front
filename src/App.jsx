import RootContainer from "./components/RootContainer/RootContainer";
import RootLayout from "./components/RootLayout/RootLayout";
import AuthRoute from "./Routes/AuthRoute";

function App() {
  return (
    <RootLayout>
      <RootContainer>
          <AuthRoute />
      </RootContainer>
    </RootLayout>
  );
}

export default App;
