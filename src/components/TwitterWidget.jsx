import React from 'react'
import { Tweet } from 'react-twitter-widgets'

// export default function TwitterWidget() {
//     return (
//         <>
            /* <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Woman was just shot by a rubber bullet as she asked to please put down your guns— <a href="https://t.co/YkZUjW007l">pic.twitter.com/YkZUjW007l</a></p>&mdash; waterspider (@waterspider__) <a href="https://twitter.com/waterspider__/status/1416461162707755010?ref_src=twsrc%5Etfw">July 17, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */

        /* </>
    )
} */

export const TwitterWidget = () => (
    <Tweet options={{ theme: "dark" }} />
  );