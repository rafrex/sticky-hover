import React from 'react';
import { hasTouch } from 'detect-touch';
import { Link } from 'react-router';

function Tests() {

  function generateTest(title, testClass, description) {
    return (
      <div className="test">
        <h2 id={`${testClass}-title`}>{title}</h2>
        <div className="test-description">
          {description}
        </div>
        <div className="anchor-tag">
          <a href={`#${testClass}-title`} className={testClass}>Anchor tag: hover is green, active is red</a>
        </div>
        <div className="button-tag">
          <button className={testClass}>Button tag: hover is green, active is red</button>
        </div>
      </div>
    );
  }

  return (
    <div className={hasTouch ? 'touch' : 'no-touch'}>
      {generateTest("Test 1", "test-1",
        <div>
          <code>:hover</code> and <code>:active</code> pseudo-classes applied
          normally (without restriction).
        </div>
      )}
      {generateTest("Test 2", "test-2",
        <div>
          <code>:hover</code> and <code>:active</code> pseudo-classes applied
          inside <code>@media (hover: hover) {'{ ... }'}</code>
        </div>
      )}
      {generateTest("Test 3", "test-3",
        <div>
          <code>:hover</code> and <code>:active</code> pseudo-classes applied
          normally, but reset inside
          of <code>@media (hover: none) {'{ ... }'}</code>
        </div>
      )}
      {generateTest("Test 4", "test-4",
        <div>
          <code>:hover</code> and <code>:active</code> pseudo-classes only
          applied if <code>.no-touch</code> class is present.
        </div>
      )}
      {generateTest("Test 5", "test-5",
        <div>
          <code>:hover</code> and <code>:active</code> pseudo-classes
          applied if <code>.no-touch</code> class is present, AND inside of
          {' '} <code>@media (hover: hover) {'{ ... }'}</code>
        </div>
      )}
    </div>
  );
}

export default Tests;
