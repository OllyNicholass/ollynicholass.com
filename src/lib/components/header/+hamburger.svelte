<script lang="ts">
  export let open: boolean = false;
  import { drawerStore  } from '@skeletonlabs/skeleton';

  const handleClick = () => {
    open = !open
    !open ? drawerStore.close() : drawerStore.open()
  }
</script>

<button
    class="hamburger hamburger--elastic"
    aria-label="Hamburger menu"
    class:is-active={$drawerStore.open}
    on:click={handleClick}
>
    <span class="hamburger-label" aria-hidden>MENU</span>
    <span class="hamburger-box">
        <span class="hamburger-inner" />
    </span>
</button>

<style lang="scss">
:root {
    --color: #84859c;
}

  // Hamburger
  // ==================================================
  .hamburger {
      padding: var(--padding, 0);
      display: inline-flex;
      align-items: center;
      cursor: pointer;

      transition-property: opacity, filter;
      transition-duration: 0.15s;
      transition-timing-function: linear;

      // Normalize (<button>)
      font: inherit;
      color: inherit;
      text-transform: none;
      background-color: transparent;
      border: 0;
      margin: 0;
      overflow: visible;

      &:active {
          background-color: transparent !important;
      }

      &:hover {
          opacity: var(--hover-opacity, 0.7);
      }

      &.is-active {
          &:hover {
              opacity: var(--hover-opacity-active, var(--hover-opacity, 0.7));
          }

          .hamburger-inner,
          .hamburger-inner::before,
          .hamburger-inner::after {
              background-color: var(--active-color, var(--color, black));
          }
      }
  }

  .hamburger-label {
    color: var(--color);
    font-size: .75rem;
    padding-right: .5rem;
  }

  .hamburger-box {
      width: var(--layer-width, 30px);
      height: calc(var(--layer-height, 4px) * 3 + var(--layer-spacing, 6px) * 2);
      display: inline-block;
      position: relative;
  }

  .hamburger-inner {
      display: block;
      top: 50%;
      margin-top: var(--layer-height, 4px) / -2;

      &,
      &::before,
      &::after {
          width: var(--layer-width, 30px);
          height: var(--layer-height, 4px);
          background-color: var(--color, black);
          border-radius: var(--border-radius, 4px);
          position: absolute;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
      }

      &::before,
      &::after {
          content: '';
          display: block;
      }

      &::before {
          top: calc((var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1);
      }

      &::after {
          bottom: calc(
              (var(--layer-spacing, 6px) + var(--layer-height, 4px)) * -1
          );
      }
  }

  .hamburger--elastic {
    .hamburger-inner {
        top: var(--layer-height, 4px) / 2;
        transition-duration: 0.275s;
        transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

        &::before {
            top: calc(var(--layer-height, 4px) + var(--layer-spacing, 6px));
            transition: opacity 0.125s 0.275s ease;
        }

        &::after {
            top: calc(
                (var(--layer-height, 4px) * 2) + (var(--layer-spacing, 6px) * 2)
            );
            transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
    }

    &.is-active {
        .hamburger-inner {
            --y-offset: calc(
                var(--layer-spacing, 6px) + var(--layer-height, 4px)
            );

            transform: translate3d(0, var(--y-offset), 0) rotate(135deg);
            transition-delay: 0.075s;

            &::before {
                transition-delay: 0s;
                opacity: 0;
            }

            &::after {
                transform: translate3d(0, calc(var(--y-offset) * -2), 0)
                    rotate(-270deg);
                transition-delay: 0.075s;
            }
        }
    }
  }
</style>  