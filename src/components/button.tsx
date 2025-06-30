type Props = {
  name: string
}

/*
export function Button(props: Props) {
  return <button>{props.name}</button>
}
*/

// Também pode ser feito com desestruturação

export function Button({ name }: Props) {
  return <button>{name}</button>
}
