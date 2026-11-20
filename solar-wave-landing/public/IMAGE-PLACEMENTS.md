# Solar Wave image placements

The images in public/images/ are wired to the website. ImageSlot uses its file path as the image source automatically, resolves it through Vite's configured base path, and shows a placeholder only if a file cannot load.

Image frames are matched to source ratios. The hero rooftop photo is a full-height background behind the centered headline and copy. It uses object-fit: cover to fill the viewport below the sticky navigation; expect a small crop on wide screens and a larger side crop on phones.

## Images used on the website

| File path | Website placement | Source size and ratio | Website frame |
|---|---|---:|---|
| /images/solar-wave-rooftop-sunset.png | Full-height hero background behind the headline, description, and calls to action | 1672 × 941 px · 16:9 | Fills the viewport below the sticky navbar with object-fit: cover; crop is centered slightly toward the rooftop panels |
| /images/solar-wave-hero-ranchi.png | Alternate hero image available in the images folder; not currently displayed | 1672 × 941 px · 16:9 | Use a 16:9 frame if selected as the hero |
| /images/solar-wave-home-rooftop.png | Home solar card | 1448 × 1086 px · 4:3 | 4:3 desktop and mobile |
| /images/solar-wave-business-rooftop.png | Business solar card | 1672 × 941 px · 16:9 | 16:9 desktop and mobile |
| /images/solar-wave-installation-team.png | Installation and handover section | 1536 × 1024 px · 3:2 | 3:2 desktop and mobile |
| /images/solar-wave-rooftop-array.png | Main photo in equipment and quality section | 1448 × 1086 px · 4:3 | 4:3 desktop and mobile |
| /images/solar-wave-equipment-detail.png | Small inset over equipment photo | 1254 × 1254 px · 1:1 | 1:1 inset |
| /images/solar-wave-partnership.png | Partner invitation section | 1536 × 1024 px · 3:2 | 3:2 desktop and mobile |
| /images/pm-surya-ghar-portrait.jpg | Portrait panel in the PM Surya Ghar initiative feature | 736 × 1308 px · 0.56:1 portrait | 0.68:1 desktop panel and 0.78:1 mobile panel; object-fit: cover with top-biased positioning to keep the face and tricolour visible |
| /images/solar-wave-logo.png | Footer brand mark | 1080 × 1350 px · 4:5 canvas with large white margins | Displayed in a 190 × 72 px (about 2.64:1) crop; object-fit: cover with centered positioning trims the blank outer margin |

The solar photographs are illustrative. Use them as Solar Wave project evidence only if you confirm they show Solar Wave work and have permission to use them that way.

When replacing or adding an image, keep its file path in the matching ImageSlot within src/App.jsx. Keep the displayed frame ratio aligned to the photo ratio to avoid clipping important details.




The national emblem image supplied for the scheme section is not included in the commercial website layout. The State Emblem of India is subject to restrictions on commercial and official-looking use; use it only after confirming the required authorization.