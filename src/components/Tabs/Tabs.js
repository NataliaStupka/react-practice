import React, { PureComponent } from 'react';
import './Tabs.css';

//у PureComponent под капотом уже идет сравнение поверхностных компонентов
export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  //shouldComponentUpdate используем максимально аккуратно, а лучше не использовать
  //Замена shouldComponentUpdate extends PureComponent (а не Component)
  //метод жизненного цикла, должен ли компонент перерендертся(перерендерится только тогда предыдущий и последующий activeTabIdx не равны)
  //пререндерится если activeTabIdxы не равны
  shouldComponentUpdate(nextProps, nextState) {
    return nextState.activeTabIdx !== this.state.activeTabIdx;
  }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              type="button"
              key={item.label}
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </>
    );
  }
}
