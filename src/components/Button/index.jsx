import { Button } from "./styles"

export function Button({ icon: Icon, ...rest }) {
  return <Button {...rest}>{Icon && <Icon size={20} />}</Button>
}
