interface WelcomeProps {
  name: string;
}

const Welcome = (props: WelcomeProps) => {
  return <h1>Hello, {props.name}</h1>;
};

const App = () => {
  return <Welcome name="Sarah" />;
};

export default App;