import './Button.scss'
function Button({ call, number }) {
  return <button onClick={call}>Дивитися секцію Д/З-{number}</button>;
}

export { Button };
