import { useSetOneTimeAlarm } from "../../application/setOneTimeAlarm"
import { useStore } from "../../services/store"

export default function Alarm() {
  const { alarm } = useStore()
  const { setOneTimeAlarm } = useSetOneTimeAlarm()

  const handleClick = () => {
    setOneTimeAlarm(true)
  }

  return <div onClick={handleClick}>Alarm : {alarm.isOn}</div>
}
