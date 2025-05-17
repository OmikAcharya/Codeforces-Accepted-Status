document.addEventListener("keydown", (event) => {
  if (
    event.code === "KeyG" &&
    event.ctrlKey &&
    !event.metaKey &&
    !event.altKey
  ) {
    const url = window.location.href;
    const match = url.match(
      /codeforces\.com\/(?:contest|problemset\/problem|gym)\/(\d+)\/([A-Z]\d*)/i,
    );

    if (match) {
      const contestId = match[1];
      const problemIndex = match[2];

      const friendsUrl = `https://codeforces.com/contest/${contestId}/status?friends=on&status=OK&handle=&problemIndex=${problemIndex}`;
      window.open(friendsUrl, "_blank");
    }
  }
});
