
import { randomItem } from '@src/utils';
import { episodes } from '@src/data/episodes';
import { Settings } from '@src/models/settings';

export function openRandomEpisode(settings: Settings): void {
  const filteredEpisodes = episodes
    .filter(episode => settings.filters.seasons.includes(episode.season))
    .filter(episode => !settings.filters.treeHouseOfHorror && !episode.title.includes('Treehouse of Horror'))

  const episode = randomItem(filteredEpisodes);
  const url = `https://www.disneyplus.com/video/${episode.contentId}`;
  chrome.tabs.create({ url });
}