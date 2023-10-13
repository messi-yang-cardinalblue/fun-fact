import { Navbar } from '@/components/layouts/navbar';
import type { Metadata } from 'next';

import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="w-full">
        <Image
          src="/first-section.jpg"
          alt="thumbnail"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <div className="py-10">
        <article className="prose m-auto">
          <h1>Guide of the Game</h1>
          <h2>Setup</h2>
          <p>This game is designed for 2-4 players, plus one moderator. Set up the game following the steps below:</p>
          <ul>
            <li>
              Shuffle the image cards and trap cards together and then position them face-down on the left side of the
              table.
            </li>
            <li>Shuffle the info cards, placing them face-down on the right side of the table.</li>
            <li>
              Place the spell cards and dice in the center of the table, ensuring they are visible to all players.
            </li>
          </ul>
          <h2>The Cards</h2>
          <h3>Image Cards</h3>
          <p>Contains a member's name, portrait, and meme.</p>
          <img src="/people_card.png" width={200} />
          <h3>Info Cards</h3>
          <p>Contains fun facts about a member.</p>
          <ul>
            <li>The fun fact related to the meme on the Image Card is highlighted.</li>
            <li>
              The border color of the Image Card and Info Card represents their Effort (Explore, PicCollage, or
              Company), while the icon on the card indicates their Function (e.g. PM, Engineer, and so on).
            </li>
          </ul>
          <img src="/info_card.png" width={200} />
          <p>
            Every Image Card has a unique matching Info Card. In other words, all Image Cards and Info Cards come in
            pairs. The Moderator will know all of the pairs.
          </p>
          <h3>Trap Cards</h3>
          <p>Trap Cards carry negative effects and introduce additional variables into the game.</p>
          <p>
            When a player flips a Trap Card, they must immediately perform the action stated on it. After completing the
            action, their turn ends immediately, and play passes to the next player.
          </p>
          <img src="/trap_card.png" width={200} />
          <h3>Spell Cards</h3>
          <p>Spell Cards assist players in enhancing their chances of winning.</p>
          <p>
            After successfully making a pair (PicCo!), a player can select a Spell Card from the table to keep on hand
            for later use.
          </p>
          <blockquote>
            Note: A player can only hold one Spell Card at a time. If a player obtains a new Spell Card while already
            holding one, they must choose to either discard the original Spell Card or give up the new one.
          </blockquote>
          <img src="/spell_card.png" width={200} />
          <h2>Flow of Play</h2>
          <h3>Start</h3>
          <p>Randomly select a starting player and proceed with the game in a clockwise order.</p>
          <h3>Play</h3>
          <p>During each player's turn, execute the following actions in order:</p>
          <ul>
            <li>Flip over an Image Card.</li>
            <li>Flip over an Info Card that you believe pairs with the Image Card.</li>
            <li>
              After you flip over an Info Card, if you are confident that it pairs with the Image Card you just
              revealed, shout "PicCo!" to attempt a pair.
            </li>
            <li>If the pairing is successful, you continue from step 3.</li>
            <li>Otherwise, cover the unpaired cards back up and the turn passes to the next player.</li>
          </ul>
          <h3>End & Winner</h3>
          <p>
            When there are no cards left on the table other than Trap Cards, the game ends. Calculate the number of
            successful pairs for each player; the one with the most wins.
          </p>
          <h2>PicCo!</h2>
          <p>After shouting "PicCo!" to attempt a pair, there are two possible outcomes:</p>
          <h3>Successful Pair</h3>
          <p>You may choose a Spell Card from the table to assist you in achieving victory in the subsequent game.</p>
          <h3>Unsuccessful Pair</h3>
          <p>Face a penalty and roll the dice.</p>
          <ul>
            <li>1 = Share a fun fact about yourself.</li>
            <li>2 = Perform a short PPAP dance.</li>
            <li>3 = Greet everyone using "cat language."</li>
            <li>4 = Spin around in place three times.</li>
            <li>5 = Take a big sip of the drink in your hand.</li>
            <li>6 = Share a fun fact about someone else.</li>
          </ul>
          <h2>Call Out "PicCo!" First!</h2>
          <p>
            All players can try to be the first to shout "PicCo!" after an Info Card is flipped, even if It's not their
            turn. The outcome after declaring "PicCo!" follows the standard rules - receive a reward or accept a
            penalty.
          </p>
          <h3>When multiple players shout "PicCo" simultaneously:</h3>
          <ul>
            <li>If one of them is the player whose turn it is, they have absolute priority.</li>
            <li>Otherwise, the moderator decides who was the fastest.</li>
          </ul>
          <p>
            After another player calls out 'PicCo!' and finishes the pairing process, regardless of whether the result
            is a success or a failure, the original player continues the game.
          </p>
        </article>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  openGraph: {
    title: 'Pico - Fun Fact!',
    description: 'Learn the fun facts from other Pico members!',
    images: [{ url: 'https://fun-fact-rouge.vercel.app/thumbnail.jpg' }],
  },
};
