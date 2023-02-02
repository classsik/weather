import React from "react";

const Form = ({ weatherMethod }) => {
  return (
    <div>
      <form action="" onSubmit={weatherMethod}>
        <input type="text" name="city" placeholder="город" />
        <button type="submit">Получить погоду</button>
      </form>
    </div>
  );
};

export default Form;
