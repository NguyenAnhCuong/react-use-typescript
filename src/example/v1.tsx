import { useState } from "react";

export interface IUser {
  name: string;
  age: number | string;
  city: string;
}

const V1 = (props: { defaultName: string; defaultAge: number | string }) => {
  //   let name: string | number = "alo";
  //   name = 10;

  //   let employee: {
  //     fname: string;
  //     lname: string;
  //     age: number;
  //   } = {
  //     fname: "a",
  //     lname: "b",
  //     age: 20,
  //   };

  //   type TEmployee = {
  //     fname: string;
  //     lname: string;
  //     age: number;
  //   };

  //   let employee: TEmployee = {
  //     fname: "a",
  //     lname: "b",
  //     age: 20,
  //   };

  //   interface TEmployee {
  //     fname: string;
  //     lname: string;
  //     age: number;
  //   }

  //   let employee: TEmployee = {
  //     fname: "a",
  //     lname: "b",
  //     age: 20,
  //   };

  const { defaultName, defaultAge } = props;

  const [name, setName] = useState<string>(defaultName);
  const [age, setAge] = useState<number | string>(defaultAge);
  const [city, setCity] = useState<string[]>(["Ha noi", "Da nang", "HCM"]);
  const [selectedCity, setSelectedCity] = useState<string>("Ha noi");

  const [users, setUsers] = useState<IUser[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    const user = {
      name,
      age,
      city: selectedCity,
    };

    setUsers([...users, user]);

    setName("");
    setAge("");
  };
  const onChangeInputName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={onChangeInputName} />
        </div>
        <div>
          <label>Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>City</label>
          <select onChange={(e) => setSelectedCity(e.target.value)}>
            {city.map((item, index) => {
              return (
                <option key={index + 1} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <input type="submit" onClick={handleSubmit} value="submit" />
      </div>
      <div>
        <table className="">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.length > 0 &&
              users.map((u, index) => (
                <tr key={`user-${index}`}>
                  <td>{u.name}</td>
                  <td>{u.age}</td>
                  <td>{u.city}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default V1;
