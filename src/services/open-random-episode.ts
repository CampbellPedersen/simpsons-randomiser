import { randomItem } from '@src/utils';
import { episodes } from '@src/data/episodes';

type Settings = {};

export function openRandomEpisode(_settings: Settings): void {
  chrome.browserAction.onClicked.addListener(function(activeTab)
  {
    const episode = randomItem(episodes);
      var url = `https://www.disneyplus.com/video/${episode.contentId}`;
      chrome.tabs.create({ url });
  });
}