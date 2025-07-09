import proteinImg from '../assets/images/jpggg.webp';
const publicationPapers = [
  // {
  //   id: 1,
  //   title: "Protein Folding and Structural Biology",
  //   image: proteinImg, // Replace with real image
  //   date: "2024-12-10",
  //   author: "Dr. Jane Doe",
  //   journal: "."
  // },
  // {
  //   id: 2,
  //   title: "AI in Molecular Dynamics",
  //   image: proteinImg,
  //   date: "2023-08-05",
  //   author: "Dr. John Smith",
  //   journal: "."

  // },
  // {
  //   id: 3,
  //   title: "Deep Learning for Drug Discovery",
  //   image: proteinImg,
  //   date: "2022-04-22",
  //   author: "Dr. Emma Patel",
  //   journal: "."

  // },
];

const mentoredPaper = {
  cali: [
    {
      index: 23,
      title: 'Enzymatic Stereodivergent Synthesis of Azaspiro[2.y]alkanes.',
      authors: 'Kennemur, J. L.; Long, Y.; Ko, C. J.; Das, A.; Arnold, F. H.',
      journal: 'Submitted.',
    },
    {
      index: 22,
      title: "Reaction Discovery Using Spectroscopic Insights from an Enzymatic C–H Amination Intermediate.",
      authors: "Das, A.;<sup>†</sup> Gao, S.;<sup>†</sup> Lal, R. G.; Hicks, M. H.; Oyala, P. H.; Arnold, F. H.",
      journal: "J. Am. Chem. Soc. 2024, 146, 20556–20562.",
      link: "https://pubs.acs.org/doi/abs/10.1021/jacs.4c05761"
    },
    {
      index: 21,
      title: "Biocatalytic, Enantioenriched Primary Amination of Tertiary C–H Bonds.",
      authors: "Mao, R.; Gao, S.; Qin, Z.-Y.; Rogge, T.; Wu, S. J.; Li, Z.-Q.; Das, A.; Houk, K. N.; Arnold, F. H.",
      journal: "Nat. Catal. 2024, 7, 585–592.",
      link: "https://www.nature.com/articles/s41929-024-01149-w"
    },
    {
      index: 20,
      title: "Enzymatic Assembly of Diverse Lactone Structures: An Intramolecular C–H Functionalization Strategy.",
      authors: "Wackelin, D. J.; Mao, R.; Sicinski, K. M.; Zhao, Y.; Das, A.; Chen, K.; Arnold, F. H.",
      journal: "J. Am. Chem. Soc. 2024, 146, 1580–1587.",
      link: "https://pubs.acs.org/doi/10.1021/jacs.3c11722"
    },
    {
      index: 19,
      title: "Expanding Biocatalysis for Organosilane Functionalization: Enantioselective Nitrene Transfer to Benzylic Si–C–H Bonds.",
      authors: "Das, A.;<sup>†</sup> Long, Y.;<sup>†</sup> Maar, R. R.; Roberts, J. M.; Arnold, F. H.",
      journal: "ACS Catal. 2024, 14, 148–152.",
      link: "https://pubs.acs.org/doi/10.1021/acscatal.3c05370"
    },
    {
      index: 18,
      title: "Directed Evolution of P411 Enzymes for Amination of Inert C–H Bonds.",
      authors: "Das, A.; Gao, S.; Athavale, S. V.; Alfonzo, E.; Long, Y.; Arnold, F. H.",
      journal: "Methods Enzymol. 2023, 693, 1–30.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S007668792300318X?via%3Dihub"
    },
    {
      index: 17,
      title: "Enzymatic Nitrogen Incorporation Using Hydroxylamine.",
      authors: "Gao, S.; Das, A.; Alfonzo, E.; Sicinski, K. M.; Rieger, D.; Arnold, F. H.",
      journal: "J. Am. Chem. Soc. 2023, 145, 20196–20201.",
      link: "https://pubs.acs.org/doi/10.1021/jacs.3c08053"
    },
    {
      index: 16,
      title: "Development of Non-Classical Photoprecursors for Rh₂ Nitrenes.",
      authors: "Paikar, A.; Van Trieste III, G. P.; Das, A.; Wang, C.-W.; Sill, T. E.; Bhuvanesh, N.; Powers, D. C.",
      journal: "Inorg. Chem. 2023, 62, 12557–12564.",
      link: "https://pubs.acs.org/doi/full/10.1021/acs.inorgchem.3c01820"
    },
    {
      index: 15,
      title: "Enantio- and Diastereoenriched Enzymatic Synthesis of 1,2,3-Polysubstituted Cyclopropanes from (Z/E)-Trisubstituted Enol Acetates.",
      authors: "Mao, R.; Wackelin, D. J.; Jamieson, C. S.; Rogge, T.; Gao, S.; Das, A.; Taylor, D. M.; Houk, K. N.; Arnold, F. H.",
      journal: "J. Am. Chem. Soc. 2023, 145, 16176–16185.",
      link: "https://pubs.acs.org/doi/10.1021/jacs.3c04870"
    },
    {
      index: 14,
      title: "Protoglobin-catalyzed formation of cis-trifluoromethyl-substituted cyclopropanes via carbene transfer.",
      authors: "Schaus, L.;<sup>†</sup> Das, A.;<sup>†</sup> Knight, A. M.; Jimenez-Osés, G.; Houk, K. N.; Garcia-Borràs, M.; Arnold, F. H.; Huang, X.",
      journal: "Angew. Chem. Int. Ed. 2023, 62, e202208936.",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202208936"
    },
    {
      index: 13,
      title: "Enzymatic Nitrogen Insertion into Unactivated C–H Bonds.",
      authors: "Athavale, S. V.;<sup>†</sup> Gao, S.;<sup>†</sup> Das, A.;<sup>†</sup> Mallojjala, S. C.; Alfonzo, E.; Long, Y.; Hirschi, J. S.; Arnold, F. H.",
      journal: "J. Am. Chem. Soc. 2022, 144, 19097–19105.",
      link: "https://pubs.acs.org/doi/10.1021/jacs.2c08285",
      perspective: "<a href='https://www.science.org/content/blog-post/zapping-amine-groups' target='_blank'>‘Zapping In Amine Groups’</a> by Derek Lowe",

      highlights: [
        "<a href='https://www.thieme-connect.de/products/ejournals/abstract/10.1055/s-0042-1760094' target='_blank'>Synfacts 2023, 19, 81</a>",
        "<a href='https://www.cell.com/chem-catalysis/fulltext/S2667-1093(22)00502-9' target='_blank'>Chem Catal. 2022, 2, 3287</a>"
      ]
    },
    {
      index: 12,
      title: "New Additions to the Arsenal of Biocatalysts for Non-canonical Amino Acid Synthesis.",
      authors: "Alfonzo, E.; Das, A.; Arnold, F. H.",
      journal: "Curr. Opin. Green Sustain. Chem. 2022, 38, 100701.",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S2452223622001134?via%3Dihub"
    },

  ],
  texas: [
    {
      index: 11,
      title: "Nitrene Photochemistry of Manganese N‑Haloamides.",
      authors: "Van Trieste III, G. P.; Reid, K. A.; Hicks, M. H.; Das, A.; Figgins, M. T.; Bhuvanesh, N.; Ozarowski, A.; Telser, J.; Powers, D. C.",
      journal: "Angew. Chem. Int. Ed. 2021, 60, 26647–26655.",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.202108304"
    },
    {
      index: 10,
      title: "Dual Polymerization Pathway for Polyolefin‑Polar Block Copolymer Synthesis via MILRad: Mechanism and Scope.",
      authors: "Dau, H.; Keyes, A.; Basbug Alhan, H. E.; Ordonez, E.; Tsogtgerel, E.; Gies, A. P.; Auyeung, E.; Zhou, Z.; Maity, A.; Das, A.; Powers, D. C.; Beezer, D. B.; Harth, E.",
      journal: "J. Am. Chem. Soc. 2020, 142, 21469–21483.",
      link: "https://pubs.acs.org/doi/abs/10.1021/jacs.0c10588"
    },
    {
      index: 9,
      title: "In Crystallo Snapshots of Rh₂-Catalyzed C–H Amination.",
      authors: "Das, A.; Wang, C.-H.; Van Trieste III, G. P.; Sun, C.-J.; Chen, Y.-S.; Reibenspies, J. H.; Powers, D. C.",
      journal: "J. Am. Chem. Soc. 2020, 142, 19862–19867.",
      link: "https://pubs.acs.org/doi/abs/10.1021/jacs.0c09842",
      highlights:[
        "<a href='https://www.nature.com/articles/s41570-020-00243-4' target='_blank'>Nat. Rev. Chem. 2021, 5, 2</a>",
      ]
    },
    {
      index: 8,
      title: "C–H Amination Mediated by Cobalt Organoazide Adducts and the Corresponding Cobalt Nitrenoid Intermediates.",
      authors: "Baek, Y.; Das, A.; Zheng, S.-L.; Reibenspies, J. H.; Powers, D. C.; Betley, T. A.",
      journal: "J. Am. Chem. Soc. 2020, 142, 11232–11243.",
      link: "https://pubs.acs.org/doi/10.1021/jacs.0c04252"
    },
    {
      index: 7,
      title: "Kinetic versus Thermodynamic Metalation Enables Synthesis of Isostructural Homo- and Heterometallic Trinuclear Clusters.",
      authors: "Hyun, S.-M.; Upadhyay, A.; Das, A.; Burns, C. P.; Sung, S.; Beaty, J. D.; Bhuvanesh, N.; Nippe, M.; Powers, D. C.",
      journal: "Chem. Commun. 2020, 56, 5893–5896.",
      link: "https://pubs.rsc.org/en/content/articlelanding/2020/cc/d0cc02346a"
    },
    {
      index: 6,
      title: "Crystallography of Reactive Intermediates.",
      authors: "Das, A.; Van Trieste III, G. P.; Powers, D. C.",
      journal: "Comment Inorg. Chem. 2020, 40, 116–158.",
      link: "https://www.tandfonline.com/doi/abs/10.1080/02603594.2020.1747054"
    },
    {
      index: 5,
      title: "Characterization of a Reactive Rh₂ Nitrenoid by Crystalline Matrix Isolation.",
      authors: "Das, A.; Chen, Y.-S.; Reibenspies, J. H.; Powers, D. C.",
      journal: "J. Am. Chem. Soc. 2019, 141, 16232–16236.",
      link: "https://pubs.acs.org/doi/10.1021/jacs.9b09064"
    },
    {
      index: 4,
      title: "Observation of a Photogenerated Rh₂ Nitrenoid Intermediate in C–H Amination.",
      authors: "Das, A.; Maher, A. G.; Telser, J.; Powers, D. C.",
      journal: "J. Am. Chem. Soc. 2018, 140, 10412–10415.",
      link: "https://pubs.acs.org/doi/10.1021/jacs.8b05599"
    },
    {
      index: 3,
      title: "Probing Substrate Diffusion in Interstitial MOF Chemistry with Kinetic Isotope Effects.",
      authors: "Wang, C.-H.; Das, A.; Gao, W.-Y.; Powers, D. C.",
      journal: "Angew. Chem. Int. Ed. 2018, 57, 3676–3681.",
      link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/anie.201713244"
    },
    {
      index: 2,
      title: "Direct Characterization of a Reactive Ru₂ Nitride by Photocrystallography.",
      authors: "Das, A.; Reibenspies, J. H.; Chen, Y.-S.; Powers, D. C.",
      journal: "J. Am. Chem. Soc. 2017, 139, 2912–2915.",
      link: "https://pubs.acs.org/doi/10.1021/jacs.6b13357"
    },
  ],
  kharagpur: [{
    index: 1,
    title: "Pd-free Sonogashira coupling: one-pot synthesis of phthalide via domino Sonogashira coupling and 5-exo-dig cyclization.",
    authors: "Dhara, S.; Singha, R.; Ghosh, M.; Ahmed, A.; Nuree, Y.; Das, A.; Ray, J. K.",
    journal: "RSC Adv. 2014, 4, 42604–42607.",
    link: "https://pubs.rsc.org/en/content/articlelanding/2014/ra/c4ra07639g"
  }
  ]
};

const recentPublication = [
  {
    id: 1,
    title: "Reaction Discovery Using Spectroscopic Insights from an Enzymatic C–H Amination Intermediate",
    author: "Das, A.; <sup>†</sup> Gao, S.; <sup>†</sup> Lal, R. G.; Hicks, M. H.; Oyala, P. H.; Arnold, F. H.",
    journal: "J. Am. Chem. Soc. 2024,146, 20556–20562.",
    date: "10.1021/jacs.4c05761",
    article: "https://pubs.acs.org/doi/abs/10.1021/jacs.4c05761"
  },
  {
    id: 2,
    title: "Biocatalytic, Enantioenriched Primary Amination of Tertiary C–H Bonds",
    author: "Mao, R.; Gao, S.; Qin, Z.-Y.; Rogge, T.; Wu, S. J.; Li, Z.-Q.; Das, A.; Houk, K. N.; Arnold, F. H.",
    journal: "J. Am. Chem. Soc. 2024,146, 20556–20562",
    date: "10.1038/s41929-024-01149-w",
    article: "https://www.nature.com/articles/s41929-024-01149-w"
  },
  {
    id: 3,
    title: "Enzymatic Assembly of Diverse Lactone Structures: An Intramolecular C–H Functionalization Strategy",
    author: "Wackelin, D. J.; Mao, R.; Sicinski, K. M.; Zhao, Y.; Das, A.; Chen, K.; Arnold, F. H.",
    journal: "J. Am.Chem. Soc. 2024, 146, 1580–1587",
    date: "10.1021/jacs.3c11722",
    article: "https://pubs.acs.org/doi/10.1021/jacs.3c11722"
  },
];

export default {
  publicationPapers,
  mentoredPaper,
  recentPublication
}