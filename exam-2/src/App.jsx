import { DatePicker } from './DatePicker'

function App() {
  return (
    <DatePicker
      prevButtonProps={{ disabled: true }}
      value={new Date()}
      onNextMonth={(nextDate) => console.log('Next Month', nextDate)}
      onPrevMonth={(prevDate) => console.log('Prev Month', prevDate)}
      onSelectDate={(selectedDate) => console.log('Selected Date', selectedDate)}
    />
  )
}

export default App
