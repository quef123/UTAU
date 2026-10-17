/* HerdMentality — INDEX-specific metadata. Keep illustration paths in groups[].indexImage.
   All relationship edges must be backed by the character setting; do not invent edges. */
const atlasCharacterMeta = Object.freeze({
  saho:  { roman: 'ADACHI SAHO', tone: 'Cracker：力のある声と明瞭な発音。', sampleVariant: 'saho-cracker' },
  maki:  { roman: 'KOIZUMI MAKI', tone: 'Seasalt：柔らかく穏やかな声。', sampleVariant: 'maki-vcv' },
  ayako: { roman: 'TOKOYO AYAKO', tone: '音色についての説明は未登録です。', sampleVariant: 'ayako' },
  chiyo: { roman: 'TOKOYO CHIYO', tone: '音色についての説明は未登録です。', sampleVariant: 'chiyo' },
  kiri:  { roman: 'TSUKISHIRO KIRI', tone: '音色についての説明は未登録です。', sampleVariant: 'kiri-main' }
});

/* Confirmed character relationship. Intentionally only one edge in this sample. */
const atlasRelationships = Object.freeze([
  { id: 'saho-maki', from: 'saho', to: 'maki', label: '相互依存' }
]);

/* Curated placements, not random positions. Values are stage-relative ratios of available space. */
const atlasPreset = Object.freeze({
  wide: {
    saho: [0.03, 0.035], maki: [0.395, 0.21], ayako: [0.83, 0.015],
    chiyo: [0.73, 0.62], kiri: [0.14, 0.635]
  },
  compact: {
    saho: [0.025, 0.015], maki: [0.65, 0.185], ayako: [0.025, 0.39],
    chiyo: [0.66, 0.545], kiri: [0.09, 0.84]
  }
});
