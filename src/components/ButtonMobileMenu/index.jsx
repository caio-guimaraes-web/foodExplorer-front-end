import { ButtonMobileMenu } from "./styles"

export function ButtonMobile({ icon: Icon, ...rest }) {
  return (
    <ButtonMobileMenu type="button" {...rest}>
      {Icon && <Icon />}
    </ButtonMobileMenu>
  )
}
