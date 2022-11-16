FROM mcr.microsoft.com/dotnet/runtime:5.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["recursion-example/recursion-example.csproj", "recursion-example/"]
RUN dotnet restore "recursion-example/recursion-example.csproj"
COPY . .
WORKDIR "/src/recursion-example"
RUN dotnet build "recursion-example.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "recursion-example.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "recursion-example.dll"]
