import Svg, { Path } from 'react-native-svg'

const Share = (props) => (
  <Svg viewBox="0 0 24 24" aria-hidden="true" {...props} width={20} height={20}>
    <Path
      d="m17.53 7.47-5-5a.749.749 0 0 0-1.06 0l-5 5a.749.749 0 1 0 1.06 1.06l3.72-3.72V15a.75.75 0 0 0 1.5 0V4.81l3.72 3.72c.146.147.338.22.53.22s.384-.072.53-.22a.749.749 0 0 0 0-1.06z"
      fill={props.color}
    />
    <Path
      d="M19.708 21.944H4.292A2.294 2.294 0 0 1 2 19.652V14a.75.75 0 0 1 1.5 0v5.652c0 .437.355.792.792.792h15.416a.793.793 0 0 0 .792-.792V14a.75.75 0 0 1 1.5 0v5.652a2.294 2.294 0 0 1-2.292 2.292z"
      fill={props.color}
    />
  </Svg>
)

export default Share
