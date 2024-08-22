"""empty message

Revision ID: 087043e6b5fd
Revises: b743a3a774cb
Create Date: 2024-08-22 16:19:08.415240

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '087043e6b5fd'
down_revision = 'b743a3a774cb'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('companions', schema=None) as batch_op:
        batch_op.alter_column('description',
               existing_type=sa.VARCHAR(length=250),
               type_=sa.Text(),
               existing_nullable=False)
        batch_op.alter_column('experience',
               existing_type=sa.VARCHAR(length=250),
               type_=sa.Text(),
               existing_nullable=False)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('companions', schema=None) as batch_op:
        batch_op.alter_column('experience',
               existing_type=sa.Text(),
               type_=sa.VARCHAR(length=250),
               existing_nullable=False)
        batch_op.alter_column('description',
               existing_type=sa.Text(),
               type_=sa.VARCHAR(length=250),
               existing_nullable=False)

    # ### end Alembic commands ###
