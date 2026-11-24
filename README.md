[![make.fun bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/capptainjack/post-x-promote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![Reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/capptainjack/post-x-promote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

# Post X Promote — make.fun bounty entry

Entry for the make.fun bounty [“Promote make.fun’s make-your-own-bounty post on X”](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01).

The entry is one post on X from [@xgurgs](https://x.com/xgurgs), quoting
[@makefunai](https://x.com/makefunai/status/2124915864336236646) with a photo of
its own attached. Places go by the post’s score at the deadline — replies +
reposts + quotes, the highest first — and the top 50 share $250.

## The post

- Post: https://x.com/xgurgs/status/2125191917717827998
- Quote of https://x.com/makefunai/status/2124915864336236646
- Text carries `make.fun` / `@makefunai` and the play code
  `makefun-palette-hazel-ivory`
- Photo: a make.fun ghost illustration made for the post

## Files

- `POST.json` — the post’s address on X, as `{"url": "..."}`.
- `main.ts` — the entry program (Node 22, standard library only). It copies
  `POST.json` into the output directory, byte for byte, after checking the
  address is really an X post address. Nothing else.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory’s `POST.json`.
