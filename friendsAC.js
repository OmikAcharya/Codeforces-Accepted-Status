document.addEventListener("keydown", (event) => {
  if (event.code === "KeyG") {
    const url = window.location.href;
    const isContestpage = url.includes("contest/");
    const isGymPage = url.includes("gym/");
    let match = null;

    if (isContestpage) {
      match = url.match(/codeforces\.com\/contest\/(\d+)\/problem\/([A-Z]\d*)/i);
    } else if (isGymPage) {
      match = url.match(/codeforces\.com\/gym\/(\d+)\/problem\/([A-Z]\d*)/i);
    } else {
      match = url.match(/codeforces\.com\/problemset\/problem\/(\d+)\/([A-Z]\d*)/i);
    }

    if (match) {
      const contestID = match[1];
      const problemIndex = match[2];
      let friendsUrl = `https://codeforces.com/contest/${contestID}/status?friends=on&status=OK&handle=&problemIndex=${problemIndex}`;
      if (isGymPage) {
        friendsUrl = `https://codeforces.com/gym/${contestID}/status?friends=on&status=OK&handle=&problemIndex=${problemIndex}`;
      }
      window.open(friendsUrl, "_blank");
    }
  }
});
