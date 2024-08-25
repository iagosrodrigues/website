{
  description = "Iago's website";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = nixpkgs.legacyPackages.${system};
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [ jq nodejs_22 pnpm ];

          shellHook = ''
            echo "Bem-vindo ao seu ambiente de desenvolvimento Nix (via Flake)!"
            echo "As seguintes ferramentas estão disponíveis:"
            echo "Node.js $(node --version)"
            echo "npm $(npm --version)"
            echo "pnpm $(pnpm --version)"
            echo "jq $(jq --version)"
            echo "Personalize este ambiente adicionando ou removendo pacotes conforme necessário."
          '';
        };
      });
}