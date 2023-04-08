interface Module {
  list: string[] | JSX.Element[];
  amount?: number;
}

export default interface TrainingModules {
  part: string;
  desc: string | JSX.Element;
  modules: Module[];
}
