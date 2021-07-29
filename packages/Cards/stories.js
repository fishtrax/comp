import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { specs, describe, it } from 'storybook-addon-specifications'
import { shallow, configure } from 'enzyme';
import Cards from './dist/index';

const BUCKET = 'https://d3izp14dmtz9lq.cloudfront.net/web';

const { expect } = require('chai')

configure({ adapter: new Adapter() });

const stories = storiesOf('Cards', module);

const singleCard = {
  "Bear River": {
    image: `${BUCKET}/Web-Header-Image-1280-Wide.jpg`,
    location: 'Bear River',
    state: 'Utah',
    distance: '31.48 miles',
    size: '4" - 8" trout',
    description: 'This stretch of water is a tailwater flowing out of Green Mountain Reservoir. It is important for anglers to check flows prior to venturing to this area. The flows fluctuate significantly and often to meet downstream water demands. The first 3 miles below the dam are public and flow through a spectacular canyon.',
    report: {
      title: 'Fly Fishing Report',
      content: [
        { company: 'Royal Gorge Anglers', phone: '888-994-6743',website: 'royalgorgeanglers.com'},
        { company: 'Cutthroat Anglers', phone: '970-262-2878', website: 'royalgorgeanglers.com'},
        { company: 'ArkAnglers', phone: '719-395-1796', website: 'royalgorgeanglers.com'}
      ]
    },
    shops: {
      title: 'Fly Shops',
      content: [
        { company: 'UpRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'},
        { company: 'UpRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'},
        { company: 'UpRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'}
      ]
    },
    regulations: {
      title: 'Regulations',
      description: 'Colorado Stream Access Laws anglers are not able to access privately-owned streambeds, regardless of how the waterway’s navigability is defined in Colorado. The streambed is owned by the landowner; boaters are able to float but do not have the right to anchor or otherwise access the private land in the streambed. In instances where the river is owned on one bank by private ownership, and public ownership owns on the opposite bank, the private landowner generally owns to the center line of the river down to the streambed.',
      website: 'cpw.state.co.us'
    },
    shuttle: {
      title: 'Shuttles',
      content: [
        { company: 'Independent Whitewater', description: 'We can move your vehicle to and from any spot on the Arkansas River. Prices include AHRA State Parks Shuttle Fees except $8 vehicle parking fee/ individual parks pass fee. All vehicles must be insured by owner. Independent Whitewater does not carry insurance for vehicles being shuttled and is not liable for any damages. Call 800-428-1479 for shuttle services.', phone: '719-539-7737', website: 'independentrafting.com'},
        { company: 'Dvorak Expeditions Shuttle Service', description: 'Let DVK shuttle your vehicle for you, with or without a trailer, so it’s waiting for you at the takeout. Don’t see your shuttle call us and we’ll make the arrangement to get you on the river and off again! Happy Boating / Fishing / SUPing / Kayaking!', phone: '719-539-6851', website: 'dvorakexpeditions.com'}
      ]
    }
  }
}

const multipleCards = {
  "Bear River": {
    image: `${BUCKET}/Web-Header-Image-1280-Wide.jpg`,
    location: 'Bear River',
    state: 'Utah',
    size: '4" - 8" trout',
    description: 'This stretch of water is a tailwater flowing out of Green Mountain Reservoir. It is important for anglers to check flows prior to venturing to this area. The flows fluctuate significantly and often to meet downstream water demands. The first 3 miles below the dam are public and flow through a spectacular canyon.',
    report: {
      title: 'Fly Fishing Report',
      content: [
        { company: 'Royal Gorge Anglers', phone: '888-994-6743',website: 'royalgorgeanglers.com'},
        { company: 'Cutthroat Anglers', phone: '970-262-2878', website: 'royalgorgeanglers.com'},
        { company: 'ArkAnglers', phone: '719-395-1796', website: 'royalgorgeanglers.com'}
      ]
    },
    shops: {
      title: 'Fly Shops',
      content: [
        { company: 'UpRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'},
        { company: 'DownRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'},
        { company: 'MidRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'}
      ]
    },
    regulations: {
      title: 'Regulations',
      description: 'Colorado Stream Access Laws anglers are not able to access privately-owned streambeds, regardless of how the waterway’s navigability is defined in Colorado. The streambed is owned by the landowner; boaters are able to float but do not have the right to anchor or otherwise access the private land in the streambed. In instances where the river is owned on one bank by private ownership, and public ownership owns on the opposite bank, the private landowner generally owns to the center line of the river down to the streambed.',
      website: 'cpw.state.co.us'
    },
    shuttle: {
      title: 'Shuttles',
      content: [
        { company: 'Independent Whitewater', description: 'We can move your vehicle to and from any spot on the Arkansas River. Prices include AHRA State Parks Shuttle Fees except $8 vehicle parking fee/ individual parks pass fee. All vehicles must be insured by owner. Independent Whitewater does not carry insurance for vehicles being shuttled and is not liable for any damages. Call 800-428-1479 for shuttle services.', phone: '719-539-7737', website: 'independentrafting.com'},
        { company: 'Dvorak Expeditions Shuttle Service', description: 'Let DVK shuttle your vehicle for you, with or without a trailer, so it’s waiting for you at the takeout. Don’t see your shuttle call us and we’ll make the arrangement to get you on the river and off again! Happy Boating / Fishing / SUPing / Kayaking!', phone: '719-539-6851', website: 'dvorakexpeditions.com'}
      ]
    }
  },
  "Arkansas River": {
    image: `${BUCKET}/Web-Header-Image-1280-Wide.jpg`,
    location: 'Arkansas River',
    state: 'California',
    distance: '128.38 miles',
    size: '10" - 15" trout',
    description: 'This stretch of water is a tailwater flowing out of Green Mountain Reservoir. It is important for anglers to check flows prior to venturing to this area. The flows fluctuate significantly and often to meet downstream water demands. The first 3 miles below the dam are public and flow through a spectacular canyon.',
    report: {
      title: 'Fly Fishing Report',
      content: [
        { company: 'Royal Gorge Anglers', phone: '888-994-6743',website: 'royalgorgeanglers.com'},
        { company: 'Cutthroat Anglers', phone: '970-262-2878', website: 'royalgorgeanglers.com'},
        { company: 'ArkAnglers', phone: '719-395-1796', website: 'royalgorgeanglers.com'}
      ]
    },
    shops: {
      title: 'Fly Shops',
      content: [
        { company: 'UpRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'},
        { company: 'DownRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'},
        { company: 'MidRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'}
      ]
    },
    regulations: {
      title: 'Regulations',
      description: 'Colorado Stream Access Laws anglers are not able to access privately-owned streambeds, regardless of how the waterway’s navigability is defined in Colorado. The streambed is owned by the landowner; boaters are able to float but do not have the right to anchor or otherwise access the private land in the streambed. In instances where the river is owned on one bank by private ownership, and public ownership owns on the opposite bank, the private landowner generally owns to the center line of the river down to the streambed.',
      website: 'cpw.state.co.us'
    },
    shuttle: {
      title: 'Shuttles',
      content: [
        { company: 'Independent Whitewater', description: 'We can move your vehicle to and from any spot on the Arkansas River. Prices include AHRA State Parks Shuttle Fees except $8 vehicle parking fee/ individual parks pass fee. All vehicles must be insured by owner. Independent Whitewater does not carry insurance for vehicles being shuttled and is not liable for any damages. Call 800-428-1479 for shuttle services.', phone: '719-539-7737', website: 'independentrafting.com'},
        { company: 'Dvorak Expeditions Shuttle Service', description: 'Let DVK shuttle your vehicle for you, with or without a trailer, so it’s waiting for you at the takeout. Don’t see your shuttle call us and we’ll make the arrangement to get you on the river and off again! Happy Boating / Fishing / SUPing / Kayaking!', phone: '719-539-6851', website: 'dvorakexpeditions.com'}
      ]
    }
  },
  "Blue River - Green Mtn Res to Colorado River": {
    image: `${BUCKET}/Web-Header-Image-1280-Wide.jpg`,
    location: 'Blue River - Green Mtn Res to Colorado River',
    state: 'Colorado',
    distance: '15.83 miles',
    size: '12" - 24" trout',
    description: 'This stretch of water is a tailwater flowing out of Green Mountain Reservoir. It is important for anglers to check flows prior to venturing to this area. The flows fluctuate significantly and often to meet downstream water demands. The first 3 miles below the dam are public and flow through a spectacular canyon.',
    report: {
      title: 'Fly Fishing Report',
      content: [
        { company: 'Royal Gorge Anglers', phone: '888-994-6743',website: 'royalgorgeanglers.com'},
        { company: 'Cutthroat Anglers', phone: '970-262-2878', website: 'royalgorgeanglers.com'},
        { company: 'ArkAnglers', phone: '719-395-1796', website: 'royalgorgeanglers.com'}
      ]
    },
    shops: {
      title: 'Fly Shops',
      content: [
        { company: 'UpRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'},
        { company: 'DownRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'},
        { company: 'MidRiver Fly Fishing', description: 'UpRiver Fly Fishing specializes in float and walk-wade trout fishing adventures based out of Buena Vista and Salida, Colorado- a short drive from Colorado Springs & Denver! All of our excursions are suitable for beginners & experts alike. Stop in to our full service fly shop for fly fishing rentals, "hot flies" and the necessary equipment to get you out fishing the Arkansas. Located in downtown Buena Vista, CO.', phone: '719-221-1164', website: 'upriverflyfishing.com', address: '327 E Main St Suite A, Buena Vista, CO 81211'}
      ]
    },
    regulations: {
      title: 'Regulations',
      description: 'Colorado Stream Access Laws anglers are not able to access privately-owned streambeds, regardless of how the waterway’s navigability is defined in Colorado. The streambed is owned by the landowner; boaters are able to float but do not have the right to anchor or otherwise access the private land in the streambed. In instances where the river is owned on one bank by private ownership, and public ownership owns on the opposite bank, the private landowner generally owns to the center line of the river down to the streambed.',
      website: 'cpw.state.co.us'
    },
    shuttle: {
      title: 'Shuttles',
      content: [
        { company: 'Independent Whitewater', description: 'We can move your vehicle to and from any spot on the Arkansas River. Prices include AHRA State Parks Shuttle Fees except $8 vehicle parking fee/ individual parks pass fee. All vehicles must be insured by owner. Independent Whitewater does not carry insurance for vehicles being shuttled and is not liable for any damages. Call 800-428-1479 for shuttle services.', phone: '719-539-7737', website: 'independentrafting.com'},
        { company: 'Dvorak Expeditions Shuttle Service', description: 'Let DVK shuttle your vehicle for you, with or without a trailer, so it’s waiting for you at the takeout. Don’t see your shuttle call us and we’ll make the arrangement to get you on the river and off again! Happy Boating / Fishing / SUPing / Kayaking!', phone: '719-539-6851', website: 'dvorakexpeditions.com'}
      ]
    }
  }
}

const widths = {
  'standard': '33%',
  'half page': '50%',
  'full page': '100%'
}

stories.addDecorator(withKnobs);
stories.add('Multiple Cards', () => {
  const containerWidth = select('Outer Container Width', widths, widths['standard']);

  return (
    <Cards 
      content={multipleCards} 
      bodyWidth={containerWidth}
    />
  );
});

stories.add('Single Card', () => {
  const containerWidth = select('Outer Container Width', widths, widths['standard']);

  return ( 
    <Cards       
      bodyWidth={containerWidth}
      content={singleCard} 
    />
  )
});

