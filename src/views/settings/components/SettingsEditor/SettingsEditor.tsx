import { Toggle } from '@src/components';
import { Settings } from '@src/models/settings';
import React from 'react';

type Props = {
  value: Settings;
  onChange: (value: Settings) => void
}

const goodSeasons = [2,3,4,5,6,7,8,9,10];

export const SettingsEditor: React.FC<Props> = ({value, onChange}) => {
  function onToggleGoodSeasons(enabled: boolean) {
    onChange({
      ...value,
      filters: {
        ...value.filters,
        seasons: enabled ? goodSeasons : [],
      }
    })
  }

  function onToggleTreehouseOfHorror(enabled: boolean) {
    onChange({
      ...value,
      filters: {
        ...value.filters,
        treeHouseOfHorror: enabled,
      }
    })
  }
  return <div>
    <Toggle value={value.filters.seasons.length > 0} onChange={onToggleGoodSeasons}>Good Episodes Only</Toggle>
    <Toggle value={value.filters.treeHouseOfHorror} onChange={onToggleTreehouseOfHorror}>Treehouse of Horror</Toggle>
  </div>
}