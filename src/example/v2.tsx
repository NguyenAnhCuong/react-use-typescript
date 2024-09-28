interface IProps {
  name?: string;
  age?: number;
  city?: string;
}

const V2 = (props: IProps) => {
  const { name = 25, age, city } = props;

  return <>hello with +{name}</>;
};

export default V2;
