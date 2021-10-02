import { Episode } from "@src/models/episode";

export function openEpisode(episode: Episode): void {
  const url = `https://www.disneyplus.com/video/${episode.contentId}`;
  chrome.tabs.create({ url });
}