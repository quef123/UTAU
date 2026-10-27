/* HerdMentality / 彼女について
 * targetId = the character whose DETAIL page is open.
 * speakerId = the character speaking about that target.
 * past: remarks made during the speaker's lifetime.
 * memoryCrossfade: 常世チヨ's post-amnesia presentQuote is shown first;
 * hovering or toggling the quote reveals her pre-amnesia pastQuote.
 * Do not infer reciprocal remarks or add unconfirmed relationships.
 */
const characterComments = [
  {
    targetId: 'saho', speakerId: 'maki', recordType: 'ordinary',
    quote: 'サホがいないと、困ることが多いから…でも、サホもわたしがいないと困ると思う。'
  },
  {
    targetId: 'saho', speakerId: 'kiri', recordType: 'past',
    quote: 'サホって、優しいよね。'
  },
  {
    targetId: 'saho', speakerId: 'chiyo', recordType: 'memoryCrossfade',
    presentQuote: 'やさしい人…たぶん。',
    pastQuote: 'いつも誰かのことを気にかけてるよね。自分のことも、もう少し大事にしてほしいな。'
  },
  {
    targetId: 'saho', speakerId: 'ayako', recordType: 'ordinary',
    quote: '悪い人じゃないのはわかってる。でも、姉さんにはあんまり近づいてほしくないんだよね。'
  },
  {
    targetId: 'maki', speakerId: 'saho', recordType: 'ordinary',
    quote: 'マキちゃんは、無理にしっかりしなくてもいいと思うんだ。苦手なことは、わたしがやってあげればいいんだし。'
  },
  {
    targetId: 'maki', speakerId: 'ayako', recordType: 'ordinary',
    quote: '前にちょっと取引したことがあるけど、あのふわふわした態度、どうも苦手なんだよね。何考えてるんだか。'
  },
  {
    targetId: 'kiri', speakerId: 'saho', recordType: 'ordinary',
    quote: 'キリちゃんのこと？……うん、覚えてるよ。忘れるわけないでしょう。'
  },
  {
    targetId: 'kiri', speakerId: 'chiyo', recordType: 'memoryCrossfade',
    presentQuote: 'だれですか…？',
    pastQuote: 'キリは、ちょっと変わってるけど、一緒にいると楽しい。'
  },
  {
    targetId: 'chiyo', speakerId: 'saho', recordType: 'ordinary',
    quote: 'チヨちゃんは、昔のことを何も覚えてないんだって…ううん、責めてるわけじゃないよ。覚えてなくても、仕方ないものね。'
  },
  {
    targetId: 'chiyo', speakerId: 'kiri', recordType: 'past',
    quote: 'チヨってさ、なんでも信じちゃうところがあるよね。そういうところ、嫌いじゃないよ。'
  },
  {
    targetId: 'chiyo', speakerId: 'ayako', recordType: 'ordinary',
    quote: 'あたしが覚えてるから。'
  },
  {
    targetId: 'chiyo', speakerId: 'maki', recordType: 'ordinary',
    quote: 'あまり話したことはないけど。サホが、時々あの人の話をする。'
  },
  {
    targetId: 'ayako', speakerId: 'saho', recordType: 'ordinary',
    quote: 'アヤコちゃんは、あんまり人に頼らない子だね。困ったことがあったら、遠慮しないで言ってくれたらいいのに。'
  },
  {
    targetId: 'ayako', speakerId: 'chiyo', recordType: 'memoryCrossfade',
    presentQuote: 'アヤコ、だいじ。',
    pastQuote: 'アヤコはね、ちょっと不器用だけど、本当は優しい子なんだよ。わたしの大事な妹なの。'
  },
  {
    targetId: 'ayako', speakerId: 'maki', recordType: 'ordinary',
    quote: '……前に、ちょっと取引したことがある。それだけ。別に、嫌いじゃないけど。'
  }
];
