import React from 'react';
import StatsWidget from '../../src/StatsWidget';
import styles from './ExampleStatsWidget.scss';

const statistics = [{
  title: '$10',
  subtitle: 'Revenue',
  percent: -15
},
{
  title: '2',
  subtitle: 'Products',
  percent: -15
},
{
  title: '1',
  subtitle: 'Transactions',
  percent: 0
},
{
  title: '$5',
  subtitle: 'Profit',
  percent: 10
},
{
  title: '456',
  subtitle: 'Music',
  percent: 15
}];

export default () =>
  <div data-hook="card-example" className={styles.statsWidgetWrapper}>
    <StatsWidget title="Let's see what's going on with your store" statistics={statistics}/>
  </div>;
