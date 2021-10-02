import { episodes } from '@src/data/episodes';
import { Episode } from '@src/models/episode';
import { Settings } from '@src/models/settings';
import { randomItem } from '@src/utils';

export function selectEpisode(settings: Settings): Episode {
  const {seasons, treeHouseOfHorror} = settings.filters;
  const filteredEpisodes = episodes
    .filter(episode => !seasons.length || seasons.includes(episode.season))
    .filter(episode => !treeHouseOfHorror && !episode.title.includes('Treehouse of Horror'))
  return randomItem(filteredEpisodes);
}
