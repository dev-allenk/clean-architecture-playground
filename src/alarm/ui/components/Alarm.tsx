import { useAlarm } from "../../application/addAlarm"
import { useAlarmStorage } from "../../services/storageService"

export default function Alarm() {
  const { alarms } = useAlarmStorage()
  const { addAlarm } = useAlarm()

  const handleClick = () => {
    addAlarm()
  }

  return (
    <div style={{ height: "100vh" }}>
      <button onClick={handleClick}>Add alarm</button>
      {alarms.length > 0 &&
        alarms.map((alarm) => (
          <div key={alarm.id}>Alarm : {`${alarm.isOn}`} </div>
        ))}
    </div>
  )
}
