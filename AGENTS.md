<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Page architecture
- Keep the help-center presentation at the index route, with reusable visual roles in the global stylesheet and existing Button variants, so the reference layout remains consistent across screen sizes.
- Keep help-center search local to the displayed categories and articles; support links open the official Stayforlong site rather than simulating a connected support service.
