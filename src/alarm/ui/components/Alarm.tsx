import { useAlarm } from "../../application/addAlarm"
import * as domain from "../../domain/alarm"
import { useAlarmStorage } from "../../services/storageService"

export default function Alarm() {
  const { alarms } = useAlarmStorage()
  const { addAlarm, deleteAlarm } = useAlarm()

  const handleAddAlarm = () => {
    addAlarm()
  }
  const handleDeleteAlarm = (alarm: domain.Alarm) => {
    deleteAlarm(alarm)
  }

  return (
    <div style={{ height: "100vh", width: "fit-content", margin: "0 auto" }}>
      <button onClick={handleAddAlarm}>Add alarm</button>
      <div>
        {alarms.length > 0 &&
          alarms.map((alarm) => (
            <div key={alarm.id} style={{ display: "flex" }}>
              <div>
                Alarm {alarm.id} : {`${alarm.isOn}`}
              </div>
              <button onClick={() => handleDeleteAlarm(alarm)}>
                Delete alarm
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}
