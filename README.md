# UNI-O-TRASPORTE

Módulo inicial de viagens da União Transportes.

## Rotas de interface
- / — apresentação
- /viagens — busca
- /viagens/resultados — resultados
- /viagens/assentos — mapa de assentos
- /conta — área do passageiro
- /admin — painel administrativo

## Importante
A interface foi criada sem alterar regras de cotação de frete. O repositório informado estava vazio no momento da implementação, então não havia código existente de cotação para modificar.

Os cartões de resultados são explicitamente marcados como demonstração visual. Não representam horários, preços ou disponibilidade reais.

## Próxima integração
Conectar Supabase Auth/Database, criar as tabelas de viagens e implementar reserva concorrente, pagamentos/webhooks, bilhetes, notificações e RLS antes de usar em produção.
