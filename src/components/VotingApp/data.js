// import jamesImage from './images/james.jpg';

const images = {
  jc: null,
};


const CANIDATES = [
  {
    id: 'JC',
    name: 'James Canning',
    image: images.jc,
    tagline: 'Yes we can-ing',
    manifesto: `<h1>Sed haec nihil sane ad rem;</h1>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Verum hoc idem saepe faciamus.</b> Poterat autem inpune; Graece donan, Latine voluptatem vocant. Sequitur disserendi ratio cognitioque naturae; Quis hoc dicit? Traditur, inquit, ab Epicuro ratio neglegendi doloris. </p>
    
    <p>Res enim concurrent contrariae. <a href="http://loripsum.net/" target="_blank">Sed haec omittamus;</a> <b>Haec dicuntur inconstantissime.</b> Polycratem Samium felicem appellabant. </p>
    
    <h2>Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore.</h2>
    
    <p>Primum divisit ineleganter; Quae duo sunt, unum facit. Quid sequatur, quid repugnet, vident. Illa tamen simplicia, vestra versuta. Quid censes in Latino fore? </p>
    
    <ul>
      <li>Sin est etiam corpus, ista explanatio naturae nempe hoc effecerit, ut ea, quae ante explanationem tenebamus, relinquamus.</li>
      <li>Miserum hominem! Si dolor summum malum est, dici aliter non potest.</li>
      <li>Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus;</li>
      <li>Nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.</li>
      <li>Confecta res esset.</li>
      <li>Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae.</li>
    </ul>
    
    
    <p>Deprehensus omnem poenam contemnet. <i>Restatis igitur vos;</i> Si quicquam extra virtutem habeatur in bonis. Quis hoc dicit? </p>
    
    <p><b>Tu quidem reddes;</b> Duo Reges: constructio interrete. <a href="http://loripsum.net/" target="_blank">Quis negat?</a> Confecta res esset. <b>Honesta oratio, Socratica, Platonis etiam.</b> Hic nihil fuit, quod quaereremus. Sumenda potius quam expetenda. Haec dicuntur fortasse ieiunius; Quae sequuntur igitur? </p>
    
    `,
  },
  {
    id: 'FD',
    name: 'Frida',
    image: images.jc,
    tagline: 'Books, Busses and poor alliteration',
    manifesto: `<h1>Sed haec nihil sane ad rem;</h1>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Verum hoc idem saepe faciamus.</b> Poterat autem inpune; Graece donan, Latine voluptatem vocant. Sequitur disserendi ratio cognitioque naturae; Quis hoc dicit? Traditur, inquit, ab Epicuro ratio neglegendi doloris. </p>
    
    <p>Res enim concurrent contrariae. <a href="http://loripsum.net/" target="_blank">Sed haec omittamus;</a> <b>Haec dicuntur inconstantissime.</b> Polycratem Samium felicem appellabant. </p>
    
    <h2>Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore.</h2>
    
    <p>Primum divisit ineleganter; Quae duo sunt, unum facit. Quid sequatur, quid repugnet, vident. Illa tamen simplicia, vestra versuta. Quid censes in Latino fore? </p>
    
    <ul>
      <li>Sin est etiam corpus, ista explanatio naturae nempe hoc effecerit, ut ea, quae ante explanationem tenebamus, relinquamus.</li>
      <li>Miserum hominem! Si dolor summum malum est, dici aliter non potest.</li>
      <li>Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus;</li>
      <li>Nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.</li>
      <li>Confecta res esset.</li>
      <li>Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae.</li>
    </ul>
    
    
    <p>Deprehensus omnem poenam contemnet. <i>Restatis igitur vos;</i> Si quicquam extra virtutem habeatur in bonis. Quis hoc dicit? </p>
    
    <p><b>Tu quidem reddes;</b> Duo Reges: constructio interrete. <a href="http://loripsum.net/" target="_blank">Quis negat?</a> Confecta res esset. <b>Honesta oratio, Socratica, Platonis etiam.</b> Hic nihil fuit, quod quaereremus. Sumenda potius quam expetenda. Haec dicuntur fortasse ieiunius; Quae sequuntur igitur? </p>
    
    `,
  },
  {
    id: 'JW',
    name: 'Jo Walters',
    image: images.jc,
    tagline: 'Making basket balls in to bagels',
    manifesto: `<h1>Sed haec nihil sane ad rem;</h1>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Verum hoc idem saepe faciamus.</b> Poterat autem inpune; Graece donan, Latine voluptatem vocant. Sequitur disserendi ratio cognitioque naturae; Quis hoc dicit? Traditur, inquit, ab Epicuro ratio neglegendi doloris. </p>
    
    <p>Res enim concurrent contrariae. <a href="http://loripsum.net/" target="_blank">Sed haec omittamus;</a> <b>Haec dicuntur inconstantissime.</b> Polycratem Samium felicem appellabant. </p>
    
    <h2>Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore.</h2>
    
    <p>Primum divisit ineleganter; Quae duo sunt, unum facit. Quid sequatur, quid repugnet, vident. Illa tamen simplicia, vestra versuta. Quid censes in Latino fore? </p>
    
    <ul>
      <li>Sin est etiam corpus, ista explanatio naturae nempe hoc effecerit, ut ea, quae ante explanationem tenebamus, relinquamus.</li>
      <li>Miserum hominem! Si dolor summum malum est, dici aliter non potest.</li>
      <li>Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus;</li>
      <li>Nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.</li>
      <li>Confecta res esset.</li>
      <li>Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae.</li>
    </ul>
    
    
    <p>Deprehensus omnem poenam contemnet. <i>Restatis igitur vos;</i> Si quicquam extra virtutem habeatur in bonis. Quis hoc dicit? </p>
    
    <p><b>Tu quidem reddes;</b> Duo Reges: constructio interrete. <a href="http://loripsum.net/" target="_blank">Quis negat?</a> Confecta res esset. <b>Honesta oratio, Socratica, Platonis etiam.</b> Hic nihil fuit, quod quaereremus. Sumenda potius quam expetenda. Haec dicuntur fortasse ieiunius; Quae sequuntur igitur? </p>
    
    `,
  },
  {
    id: 'DG',
    name: 'Dan Green',
    image: images.jc,
    tagline: 'Not a pseudonym',
    manifesto: `<h1>Sed haec nihil sane ad rem;</h1>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <b>Verum hoc idem saepe faciamus.</b> Poterat autem inpune; Graece donan, Latine voluptatem vocant. Sequitur disserendi ratio cognitioque naturae; Quis hoc dicit? Traditur, inquit, ab Epicuro ratio neglegendi doloris. </p>
    
    <p>Res enim concurrent contrariae. <a href="http://loripsum.net/" target="_blank">Sed haec omittamus;</a> <b>Haec dicuntur inconstantissime.</b> Polycratem Samium felicem appellabant. </p>
    
    <h2>Luxuriam non reprehendit, modo sit vacua infinita cupiditate et timore.</h2>
    
    <p>Primum divisit ineleganter; Quae duo sunt, unum facit. Quid sequatur, quid repugnet, vident. Illa tamen simplicia, vestra versuta. Quid censes in Latino fore? </p>
    
    <ul>
      <li>Sin est etiam corpus, ista explanatio naturae nempe hoc effecerit, ut ea, quae ante explanationem tenebamus, relinquamus.</li>
      <li>Miserum hominem! Si dolor summum malum est, dici aliter non potest.</li>
      <li>Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus;</li>
      <li>Nunc vero a primo quidem mirabiliter occulta natura est nec perspici nec cognosci potest.</li>
      <li>Confecta res esset.</li>
      <li>Non quaeritur autem quid naturae tuae consentaneum sit, sed quid disciplinae.</li>
    </ul>
    
    
    <p>Deprehensus omnem poenam contemnet. <i>Restatis igitur vos;</i> Si quicquam extra virtutem habeatur in bonis. Quis hoc dicit? </p>
    
    <p><b>Tu quidem reddes;</b> Duo Reges: constructio interrete. <a href="http://loripsum.net/" target="_blank">Quis negat?</a> Confecta res esset. <b>Honesta oratio, Socratica, Platonis etiam.</b> Hic nihil fuit, quod quaereremus. Sumenda potius quam expetenda. Haec dicuntur fortasse ieiunius; Quae sequuntur igitur? </p>
    
    `,
  },
];

export default {
  groups: [
    {
      name: 'Full-time elected officers',
      positions: [
        {
          id: 'ACTIVITIES',
          name: 'Activities Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.',
          candidates: CANIDATES
        },
        {
          id: 'WELFARE',
          name: 'Welfare Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.',
          candidates: CANIDATES
        },
        {
          id: 'UNDER',
          name: 'Undergraduate Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.',
          candidates: CANIDATES
        },
        {
          id: 'POST',
          name: 'Postgraduate Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.',
          candidates: CANIDATES
        },
        {
          id: 'PRES',
          name: 'President',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.',
          candidates: CANIDATES
        },
        {
          id: 'SOC',
          name: 'Society and Citizenship Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.',
          candidates: CANIDATES
        },
      ]
    },
    {
      name: 'Part-time elected officers',
      positions: [
        {
          id: 'EM',
          name: 'Ethnic Minority Students Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.'
        },
        {
          id: 'WOMEN',
          name: 'Women Students Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.'
        },
        {
          id: 'LGBTQP',
          name: 'LGBTQ+ Students Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.'
        },
        {
          id: 'SWD',
          name: 'Students with Disabilities Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.'
        },
        {
          id: 'TANB',
          name: 'Trans and Non-Binary Students Officer',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Si mala non sunt, iacet omnis ratio Peripateticorum.'
        },
      ]
    },
  ]
};