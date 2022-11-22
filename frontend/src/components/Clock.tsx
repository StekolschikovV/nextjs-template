import {observer} from 'mobx-react-lite'
import {useStore} from './StoreProvider'

const Clock = observer(function Clock(props) {
    const store = useStore()
    return (
        <div className={store.light ? 'light' : ''}>
            {store.timeString}
            <style jsx>{`
        div {
          padding: 15px;
          color: #82fa58;
          display: inline-block;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }

        .light {
          background-color: #999;
        }
      `}</style>
            <button onClick={() => store.start()}>start</button>
            <button onClick={() => store.stop()}>stop</button>
        </div>

    )
})

export default Clock
