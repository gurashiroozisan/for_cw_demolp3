export type Kitten = {
  id: string;
  name: string;
  gender: string;
  age: string;
  area: string;
  status: "募集中" | "交渉中";
  description: string;
  image: string;
};

export const kittens: Kitten[] = [
  {
    id: "1",
    name: "ミルク",
    gender: "メス",
    age: "生後3ヶ月",
    area: "東京都世田谷区",
    status: "募集中",
    description:
      "人懐っこくて、膝の上が大好きな甘えん坊です。他の子猫とも仲良く遊べます。",
    image:
      "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=600&h=450&fit=crop",
  },
  {
    id: "2",
    name: "ソラ",
    gender: "オス",
    age: "生後4ヶ月",
    area: "神奈川県横浜市",
    status: "募集中",
    description:
      "好奇心旺盛で元気いっぱい。おもちゃ遊びが大好きで、毎日の遊び時間を楽しみにしています。",
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=450&fit=crop",
  },
  {
    id: "3",
    name: "コハク",
    gender: "メス",
    age: "生後2ヶ月",
    area: "埼玉県さいたま市",
    status: "募集中",
    description:
      "おっとりした性格で、静かな環境が向いています。優しく撫でてもらうのが大好きです。",
    image:
      "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=450&fit=crop",
  },
  {
    id: "4",
    name: "ルナ",
    gender: "メス",
    age: "生後5ヶ月",
    area: "千葉県船橋市",
    status: "交渉中",
    description:
      "美しい模様が特徴的。人見知りですが、慣れるととても甘えてきます。",
    image:
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=600&h=450&fit=crop",
  },
  {
    id: "5",
    name: "モカ",
    gender: "オス",
    age: "生後3ヶ月",
    area: "東京都杉並区",
    status: "募集中",
    description:
      "ふわふわの毛並みが自慢。食いしん坊で、ごはんの時間をとても楽しみにしています。",
    image:
      "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&h=450&fit=crop",
  },
  {
    id: "6",
    name: "ハナ",
    gender: "メス",
    age: "生後4ヶ月",
    area: "東京都練馬区",
    status: "募集中",
    description:
      "おとなしくて穏やかな性格。初めて猫を飼う方にもおすすめです。",
    image:
      "https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=600&h=450&fit=crop",
  },
];

export const steps = [
  {
    number: "01",
    title: "子猫を探す",
    description: "プロフィールや写真を見て、気になる子を見つけましょう。",
  },
  {
    number: "02",
    title: "お問い合わせ",
    description: "フォームからお問い合わせください。ボランティアがご連絡します。",
  },
  {
    number: "03",
    title: "面談・お見合い",
    description: "実際にお会いして、子猫との相性を確認していただきます。",
  },
  {
    number: "04",
    title: "お迎え",
    description: "条件が合えば、新しい家族としてお迎えいただけます。",
  },
];
